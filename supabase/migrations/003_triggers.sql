CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

CREATE OR REPLACE FUNCTION update_module_progress()
RETURNS TRIGGER AS $$
DECLARE
  v_module_id UUID;
  v_completed INTEGER;
  v_total INTEGER;
BEGIN
  SELECT l.module_id INTO v_module_id FROM lessons l WHERE l.id = NEW.lesson_id;

  SELECT COUNT(*) INTO v_total FROM lessons WHERE module_id = v_module_id AND is_published = true;
  SELECT COUNT(*) INTO v_completed FROM user_lesson_progress ulp
    JOIN lessons l ON l.id = ulp.lesson_id
    WHERE ulp.user_id = NEW.user_id AND l.module_id = v_module_id AND ulp.is_completed = true;

  INSERT INTO user_module_progress (user_id, module_id, lessons_completed, total_lessons, is_completed, completed_at)
  VALUES (NEW.user_id, v_module_id, v_completed, v_total, v_completed = v_total, CASE WHEN v_completed = v_total THEN now() ELSE NULL END)
  ON CONFLICT (user_id, module_id) DO UPDATE SET
    lessons_completed = v_completed,
    total_lessons = v_total,
    is_completed = v_completed = v_total,
    completed_at = CASE WHEN v_completed = v_total THEN now() ELSE user_module_progress.completed_at END;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_lesson_progress_change ON user_lesson_progress;
CREATE TRIGGER on_lesson_progress_change
  AFTER INSERT OR UPDATE ON user_lesson_progress
  FOR EACH ROW EXECUTE FUNCTION update_module_progress();
