import { SiteClient } from 'datocms-client';

export default async function controllerRequests (req,res) {
    if (req.method === 'POST') {
        const token = 'c3f161ae3bc1bdb07fc16bdfd7809b';
        const client = new SiteClient(token);

        const registroCriado = await client.items.create({
            itemType: "1005773",
            ...req.body,
        })
    
        res.json({
            dados: "Funcionou",
            registroCriado: registroCriado,
        })
        return
    }

    res.status(404).json({
        message: "I CAN'T SEE ANYTHING '-'"
    })
}