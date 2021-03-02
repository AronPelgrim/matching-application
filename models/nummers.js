const mongoose = require('mongoose');

const Schemax = mongoose.Schema;

const nummerSchema = new Schemax(
        {
                title: {
                        type: String,
                        required: true,
                },
                artist: {
                        type: String,
                        required: true,
                },
        },
        { timestamps: true }
);

const Nummers = mongoose.model('nummers', nummerSchema);
module.exports = Nummers;
