'use server'

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function signUpStartUp(formData: FormData) {
    const supabase = await createClient();
    const signUpData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    const profileData = {
        full_name: formData.get('first_name') as string + ' ' + formData.get('last_name') as string,
        user_type: 'startup',
        avatar_url : "",
        bio: formData.get('bio') as string,
        website: formData.get('website') as string,
        location: formData.get('location') as string,
    }

    const { error: signUpError } = await supabase.auth.signUp(signUpData)

    if (signUpError) {
        throw new Error(signUpError.message);
    }

    const { error: profileInsertError } = await supabase.from('profiles').insert(profileData);

    if (profileInsertError) {
        throw new Error(profileInsertError.message);
    }
}

export async function registerStartup(formData:FormData) {
    const supabase = await createClient();

    const registerStartupData = {
        startup_name: formData.get('startup_name') as string,
        logo_url: formData.get('logo_url') as string,
        tagline: formData.get('tagline') as string,
        description: formData.get('description') as string,
        industry: formData.get('industry') as string,
        development_stage: formData.get('development_stage') as string,
        founded_date: formData.get('founded_date') as string,
        team_size: formData.get('team_size') as string,
        funding_goal: formData.get('funding_goal') as string,
    };

    const {error: registerStartupError} = await supabase.from('startups').insert(registerStartupData);

    if (registerStartupError) {
        throw new Error(registerStartupError.message);
    }
    revalidatePath('/', 'layout');
    redirect('/');
}