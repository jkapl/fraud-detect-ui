export async function getMessages () {
    const res = await fetch('/api/messages')
    return res.json();
}