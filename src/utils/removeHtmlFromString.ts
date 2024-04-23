export const removeHtml = (msg:string)=>
{
 return msg && escapeHtml(msg.replace(/(<([^>]+)>)/ig, ''));
}

export const escapeHtml = (msg:string) => {
    return msg && msg
                  .replace(/&amp;/g, '&')
                  .replace(/&#038;/g, '&')
                  .replace(/&quot;/g, '"')
                  .replace(/&#39;/g, "'")
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>');
}