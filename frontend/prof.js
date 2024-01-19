// JavaScript code to retrieve and display the user's profile

// Function to retrieve the user's profile from the server
function getUserProfile() {
    // Make an AJAX request to the server to retrieve the user's profile data
    // Replace 'get_profile.php' with the actual server-side script URL
    fetch('get_profile.php')
      .then(response => response.json())
      .then(data => {
        // Update the HTML elements with the profile data
        document.getElementById('profile-name').textContent = data.name;
        document.getElementById('profile-email').textContent = data.email;
        // Add more profile information here and update the corresponding HTML elements
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to retrieve and display the user's profile when the page loads
  getUserProfile();
  