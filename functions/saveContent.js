const fs = require('fs');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(fs.readFileSync('data.json'));
    const newContent = JSON.parse(event.body);

    // Generate a unique ID for the new content (optional)
    const newContentId = generateUniqueId();

    // Assign the new content the unique ID
    newContent.id = newContentId;

    // Add the new content to the existing data
    data.push(newContent);

    // Save the updated data to the data.json file
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Content saved successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while saving the content.' }),
    };
  }
};

function generateUniqueId() {
  // Implement your own unique ID generation logic here
  // This is just a simple example
  return Math.random().toString(36).substr(2, 9);
}
