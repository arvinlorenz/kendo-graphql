const Version = require('../models/version');
module.exports = {

  getVersions: async function() {
    const versions = await Version.find().sort({ text : 'descending'});
    return versions;
  },
  addVersion: async function({ versionInput }, req) {

    const existingDate = await Version.findOne({ text: versionInput.date });
    if (existingDate) {
      const items = [...existingDate.items];
      const newItems = [{ text:  versionInput.time, data: versionInput.data}, ...items]

      existingDate.items = newItems
      existingDate.save();
      return existingDate;
    } else {
      const version = new Version({
        text: versionInput.date,
        items: [{
          text: versionInput.time,
          data: versionInput.data,
        }]

      })

      const addedVersion = await version.save();
      return { ...addedVersion._doc, _id: addedVersion._id.toString() };
    }




  }
}
