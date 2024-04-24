const Get = require('../model/get');

// Controller function to create a new data entry
const createDataEntry = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, phoneNo, Services, addressLine1, addressLine2, city, state, country, postalCode } = req.body;

    // Create a new data entry document
    const newDataEntry = new Get({
      name,
      email,
      phoneNo,
      Services,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      postalCode
    });

    // Save the new data entry to the database
    await newDataEntry.save();

    res.status(201).json({ message: 'Data entry created successfully', dataEntry: newDataEntry });
  } catch (error) {
    console.error('Error creating data entry:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get all data entries
const getAllDataEntries = async (req, res) => {
  try {
    // Retrieve all data entries from the database
    const dataEntries = await Get.find();

    res.status(200).json(dataEntries);
  } catch (error) {
    console.error('Error getting data entries:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createDataEntry, getAllDataEntries };
