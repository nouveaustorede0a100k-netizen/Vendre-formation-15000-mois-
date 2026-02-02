INSERT INTO modules (title, subtitle, module_number, duration_label, is_published) VALUES
('Setup & Outils IA', 'Configuration de l''environnement', 1, '1h', true),
('Maîtriser Cursor & l''IA', 'Génération de code assistée', 2, '1h', true)
ON CONFLICT (module_number) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Introduction à l''écosystème IA', 750, 1, true, '["Comprendre les bases fondamentales", "Configurer votre environnement de travail", "Éviter les erreurs courantes des débutants"]'::jsonb
FROM modules m WHERE m.module_number = 1
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Installation de Cursor & Configuration', 1125, 2, true, '["Installer Cursor sur votre OS", "Configurer les extensions essentielles", "Connecter les APIs IA"]'::jsonb
FROM modules m WHERE m.module_number = 1
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Premier projet avec Claude 3.5', 1520, 3, true, '["Créer un projet from scratch", "Utiliser les prompts efficacement", "Structurer son code avec l''IA"]'::jsonb
FROM modules m WHERE m.module_number = 1
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Prompt Engineering Avancé', 900, 1, true, '["Maîtriser les techniques de prompting", "Créer des prompts système", "Itérer efficacement"]'::jsonb
FROM modules m WHERE m.module_number = 2
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Génération de composants React', 1200, 2, true, '["Générer des composants UI", "Personnaliser avec Tailwind", "Débugger le code généré"]'::jsonb
FROM modules m WHERE m.module_number = 2
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO lessons (module_id, title, duration_seconds, lesson_order, is_published, learning_objectives) 
SELECT m.id, 'Debugging assisté par IA', 1080, 3, true, '["Identifier les erreurs rapidement", "Utiliser l''IA pour corriger", "Tester efficacement"]'::jsonb
FROM modules m WHERE m.module_number = 2
ON CONFLICT (module_id, lesson_order) DO NOTHING;

INSERT INTO documents (title, file_url, file_type, file_size_label, document_order) VALUES
('Guide d''installation Cursor.pdf', 'https://placeholder.supabase.co/storage/v1/object/public/documents/guide-cursor.pdf', 'pdf', '2.4 MB', 1),
('Cheatsheet Prompt Engineering.pdf', 'https://placeholder.supabase.co/storage/v1/object/public/documents/cheatsheet-prompts.pdf', 'pdf', '1.1 MB', 2),
('Ressources Supabase.zip', 'https://placeholder.supabase.co/storage/v1/object/public/documents/ressources-supabase.zip', 'zip', '5.0 MB', 3);
