export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: "student" | "admin" | "advisor";
          plan: "free" | "standard" | "premium" | "pro";
          stripe_customer_id: string | null;
          subscription_status: string;
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at" | "updated_at"> & {
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      modules: {
        Row: {
          id: string;
          title: string;
          subtitle: string | null;
          description: string | null;
          module_number: number;
          duration_label: string | null;
          icon_name: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["modules"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["modules"]["Insert"]>;
      };
      lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          description: string | null;
          video_url: string | null;
          duration_seconds: number | null;
          lesson_order: number;
          learning_objectives: Json | null;
          is_published: boolean;
          is_free_preview: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["lessons"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["lessons"]["Insert"]>;
      };
      user_lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          is_completed: boolean;
          completed_at: string | null;
          video_progress_seconds: number;
          last_accessed_at: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["user_lesson_progress"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["user_lesson_progress"]["Insert"]>;
      };
      user_module_progress: {
        Row: {
          id: string;
          user_id: string;
          module_id: string;
          lessons_completed: number;
          total_lessons: number;
          is_completed: boolean;
          completed_at: string | null;
          started_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["user_module_progress"]["Row"], "id"> & { id?: string };
        Update: Partial<Database["public"]["Tables"]["user_module_progress"]["Insert"]>;
      };
      documents: {
        Row: {
          id: string;
          title: string;
          file_url: string;
          file_type: string | null;
          file_size_label: string | null;
          document_order: number;
          is_published: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["documents"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["documents"]["Insert"]>;
      };
    };
  };
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Module = Database["public"]["Tables"]["modules"]["Row"];
export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
export type UserLessonProgress = Database["public"]["Tables"]["user_lesson_progress"]["Row"];
export type UserModuleProgress = Database["public"]["Tables"]["user_module_progress"]["Row"];
export type Document = Database["public"]["Tables"]["documents"]["Row"];
