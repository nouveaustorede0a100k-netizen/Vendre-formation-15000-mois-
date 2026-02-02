ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view published modules" ON modules FOR SELECT USING (auth.role() = 'authenticated' AND is_published = true);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view published lessons" ON lessons FOR SELECT USING (auth.role() = 'authenticated' AND is_published = true);

ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own progress" ON user_lesson_progress FOR ALL USING (auth.uid() = user_id);

ALTER TABLE user_module_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own module progress" ON user_module_progress FOR ALL USING (auth.uid() = user_id);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own payments" ON payments FOR SELECT USING (auth.uid() = user_id);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view documents" ON documents FOR SELECT USING (auth.role() = 'authenticated');

ALTER TABLE lesson_discussions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view discussions" ON lesson_discussions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users can create discussions" ON lesson_discussions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can edit own discussions" ON lesson_discussions FOR UPDATE USING (auth.uid() = user_id);

-- Allow insert own profile (for trigger handle_new_user; trigger runs as SECURITY DEFINER so may bypass RLS)
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
