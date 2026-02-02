ALTER TABLE evaluations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view published evaluations" ON evaluations FOR SELECT USING (auth.role() = 'authenticated' AND is_published = true);

ALTER TABLE evaluation_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can view evaluation questions" ON evaluation_questions FOR SELECT USING (auth.role() = 'authenticated');

ALTER TABLE user_evaluation_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own evaluation results" ON user_evaluation_results FOR ALL USING (auth.uid() = user_id);
