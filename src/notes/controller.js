const notes = [
  { id: 1, title: 'title 1', text: 'text 1' },
  { id: 2, title: 'title 2', text: 'text 2' },
];

const getNotes = (req, res, next) => {
  res.status(200).json(notes);
};

const postNotes = (req, res, next) => {
  console.log(req.body);

  const note = {
    id: Date.now(),
    ...req.body,
  };

  res.status(201).json(note);
};

module.exports = { getNotes, postNotes };
