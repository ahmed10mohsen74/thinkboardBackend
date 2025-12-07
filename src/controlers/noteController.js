import Note from "../models/note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.json(notes);
    } catch (error) {
        console.log("error in get all notes", error);
        res.status(500).json({ message: "Server Error" });
    }
}

export async function getNoteById (req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: "note not found"})
        }
        res.json(note);
    } catch (error) {
        console.log("error in get note by id:", error);
        res.status(500).json({ message: "internal Server Error" });
        
    }
}

export async function createNote (req, res) {
    try{
        const {title, content} = req.body;
        console.log("title, content:", title, content);
        const note = new Note ({title, content})
        const saveNote = await note.save()
        res.status(201).json(saveNote);
    } catch(error){
        console.log("error in create note:", error);

    }
}

export async function updateNote (req, res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
        if(!updatedNote){
            return res.status(404).json({message: "note not found"})
        }

        res.json(updatedNote);
    } catch (error) {
        console.log("error in update note:", error);
        res.status(500).json({ message: "internal Server Error" });
    }
}

export async function deleteNote (req, res) {
     try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote){
            return res.status(404).json({message: "note not found"})
        }

        res.json({message: "note deleted successfully"});
    } catch (error) {
        console.log("error in update note:", error);
        res.status(500).json({ message: "internal Server Error" });
    }

}
