import { API_KEY } from '@env'; // Import the API key from the environment variables

const handleSearch = async (username, setUserProfile, setUserRecentAchievements) => {
  if (!username) {
    alert('Please enter a username');
    return;
  }

  try {
    const [profileResponse, achievementsResponse] = await Promise.all([
      fetch(`https://retroachievements.org/API/API_GetUserProfile.php?u=${username}&y=${API_KEY}`),
      fetch(`https://retroachievements.org/API/API_GetUserRecentAchievements.php?u=${username}&m=60000&y=${API_KEY}`)
    ]);

    const profileData = await profileResponse.json();
    const achievementsData = await achievementsResponse.json();

    setUserProfile(profileData);
    setUserRecentAchievements(achievementsData);
  } catch (error) {
    alert('Failed to fetch user data');
    console.error(error);
  }
};

export default handleSearch;