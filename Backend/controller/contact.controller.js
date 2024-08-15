import ContactPage from "../model/contact.model.js";

export const addContact = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new ContactPage({
            name,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: "Contact added successfully" });

    } catch (error) {
        res.status(500).json({ message: 'Error sending message', error });
    }
}