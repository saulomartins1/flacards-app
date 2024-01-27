"use server"
import createSupabaseServerClient from "@/app/lib/supabase/server";


// Verificar se o usuário está autenticado;
export async function getUserSession() {
    const supabase = await createSupabaseServerClient();

    return supabase.auth.getUser();
}