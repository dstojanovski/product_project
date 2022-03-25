const AppError = require("../utils/appError");

exports.deleteOne = Model => async (req, res) => {

    try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc){
        return next (new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
    status: "The doc was deleted successfully",

    });
    }
    catch(err) {
    res.status(200).json({
        status: 'Bad request',
        message: err,
    });
    }
};

exports.updateOne = Model => async (req, res) => {
    try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators: true,
    });

    if (!doc){
        return next (new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'Updated doc',
        data: {
             data: doc,
        }
    });
    }
    catch(err) {
        res.status(200).json({
            status: 'Bad request',
            message: err,
        });
    }
};
