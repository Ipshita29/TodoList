import { Request, Response } from "express";
import Book from "./book.model";

class BookController {

    async create(req: Request, res: Response) {
        const book = await Book.create(req.body);
        res.json(book);
    }

    async getAll(req: Request, res: Response) {
        const search = req.query.search ? String(req.query.search) : "";
        const page = Number(req.query.page) || 1;
        const limit = 5;

        const books = await Book.find({
            title: { $regex: search, $options: "i" }
        })
        .skip((page - 1) * limit)
        .limit(limit);

        res.json(books);
    }

    async getOne(req: Request, res: Response) {
        const book = await Book.findById(req.params.id);
        res.json(book);
    }

    async update(req: Request, res: Response) {
        const updated = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    }

    async delete(req: Request, res: Response) {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    }
}

export default new BookController();
