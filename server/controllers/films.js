import Film from "./../models/Film.js"
// import express from "express";
// const app = express();
// app.use(express.json());
const postFilm = async (req, res) => {

    const {
        title,
        shortDescription,
        director,
        poster,
        releaseYear,
        category,
        language,
        rating,
        countries,
        awards
    } = req.body;

    const newFilm = new Film({
        title: title,
        shortDescription: shortDescription,
        director: director,
        poster: poster,
        releaseYear: releaseYear,
        category: category,
        language: language,
        rating: rating,
        countries: countries,
        awards: awards
    });

    const savedFilm = await newFilm.save();

    return res.status(201).json({
        success: true,
        message: "Film created.",
        data: savedFilm
    });
};

const getFilm = async (req, res) => {
    try {
        const films = await Film.find().select("-__v -createdAt -updatedAt");
        return res.status(200).json({
            success: true,
            data: films,
            message: "All Films fatched."
        });
    }
    catch {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
};

const getFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await Film.findOne({ _id: id }).select("-__v ");
        if (film) {
            return res.status(200).json({
                success: true,
                data: film,
                message: "Film fetched"
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "Film not found",
                data: null,
            });
        }
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })
    }
};

const deleteFilmById = async (req, res) => {
    const {id} = req.params;
    try {
        const film = await Film.deleteOne({ _id: id });
        return res.status(200).json({
                success: true,
                data: film,
                message: "Film deleted"
            });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })
    }

}

const updateFilmById = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        shortDescription,
        director,
        poster,
        releaseYear,
        category,
        language,
        rating,
        countries,
        awards
    } = req.body;

    try {
        const updatedFilm = await Film.updateOne({ _id: id }, {
            title: title,
            shortDescription: shortDescription,
            director: director,
            poster: poster,
            releaseYear: releaseYear,
            category: category,
            language: language,
            rating: rating,
            countries: countries,
            awards: awards
        });
        return res.status(200).json({
            success: true,
            message: "Film updated",
            data: updatedFilm,
        })
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
};

const updateFilmRatingById = async (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;

      if (typeof rating === 'undefined') {
        return res.status(400).json({
            success: false,
            message: "Rating is required.",
            data: null,
        });
    }
    try {
        const updatedFilm = await Film.findByIdAndUpdate({ _id: id }, { rating: rating },{new:true});// Return the updated document
          if (!updatedFilm) {
            return res.status(404).json({
                success: false,
                message: "Film not found.",
                data: null,
            });
        }
        return res.status(200).json({
            success: true,
            message: "Film rating updated.",
            data: updatedFilm,
        });

    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
}
export { postFilm, getFilm, getFilmById, deleteFilmById, updateFilmById, updateFilmRatingById }