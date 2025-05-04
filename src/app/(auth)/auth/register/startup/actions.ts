'use server'

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function signUp(formData: FormData) {
    const supabase = await createClient();
    const signUpData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    const insertData = {
        id: 1,
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
    }

    const { error: signUpError } = await supabase.auth.signUp(signUpData)

    if (signUpError) {
        throw new Error(signUpError.message);
    }

    const { error: insertError } = await supabase.from('users').insert(insertData);

    if (insertError) {
        throw new Error(insertError.message);
    }

    revalidatePath('/', 'layout');
    redirect('/');
}