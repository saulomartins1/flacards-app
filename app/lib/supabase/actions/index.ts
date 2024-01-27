"use server"
import createSupabaseServerClient from "@/app/lib/supabase/server";


// Verificar se o usuário está autenticado;
export async function getUserSession() {
    const supabase = await createSupabaseServerClient();

    return supabase.auth.getUser();
}

// Registrar com email e senha;
export async function signUpCredentials(data: {
    email: string,
    password: string,
}) {
    const supabase = await createSupabaseServerClient();

    const userCreated = await supabase.auth.signUp({ email: data.email, password: data.password })

    if (userCreated.error?.message) {
        console.log(userCreated.error?.message)
    }

    if (userCreated.data.user?.email) {
        console.log("user existe!")
    } else {
        console.log("user NÃO existe!")
    }
    return JSON.stringify(userCreated);
}

// Acessar conta com email e senha;
export async function signInCredentials(data: {
    email: string,
    password: string,
}) {
    const supabase = await createSupabaseServerClient();

    const userLogin = await supabase.auth.signInWithPassword({ email: data.email, password: data.password })
    return JSON.stringify(userLogin);

}
