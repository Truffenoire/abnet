'use server'

export async function doAdmin({ password }) {
    
    const mdp = '4567'
    const formData = new FormData();
    formData.append('password', password);
    
    //verifier le contenu du formulaire
    const data = password;
    
    if(data === mdp){
        return true
    }else{
        return false
    }
}
