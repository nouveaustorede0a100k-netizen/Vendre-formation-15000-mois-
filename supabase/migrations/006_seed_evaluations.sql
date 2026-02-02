INSERT INTO evaluations (module_id, title, description, passing_score, is_published)
SELECT m.id, 'Quiz Module 1 : Setup & Outils IA', 'Vérifiez vos connaissances sur l''environnement et les outils IA.', 70, true
FROM modules m WHERE m.module_number = 1
AND NOT EXISTS (SELECT 1 FROM evaluations e WHERE e.module_id = m.id)
LIMIT 1;

INSERT INTO evaluation_questions (evaluation_id, question_text, question_type, options, question_order)
SELECT e.id, 'Quel outil permet de générer du code avec l''IA directement dans l''éditeur ?', 'multiple_choice',
  '[{"text": "Cursor", "is_correct": true}, {"text": "Figma", "is_correct": false}, {"text": "Excel", "is_correct": false}]'::jsonb, 1
FROM evaluations e
JOIN modules m ON e.module_id = m.id AND m.module_number = 1
WHERE NOT EXISTS (SELECT 1 FROM evaluation_questions eq WHERE eq.evaluation_id = e.id AND eq.question_order = 1)
LIMIT 1;

INSERT INTO evaluation_questions (evaluation_id, question_text, question_type, options, question_order)
SELECT e.id, 'Quelle est la structure typique d''un SaaS ?', 'multiple_choice',
  '[{"text": "Frontend, Backend, BDD, API, Auth", "is_correct": true}, {"text": "Un seul fichier", "is_correct": false}, {"text": "Pas de BDD", "is_correct": false}]'::jsonb, 2
FROM evaluations e
JOIN modules m ON e.module_id = m.id AND m.module_number = 1
WHERE NOT EXISTS (SELECT 1 FROM evaluation_questions eq WHERE eq.evaluation_id = e.id AND eq.question_order = 2)
LIMIT 1;
