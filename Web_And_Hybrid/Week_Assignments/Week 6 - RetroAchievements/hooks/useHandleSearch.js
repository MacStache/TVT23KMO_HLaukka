import { API_KEY } from '@env'; // Tuodaan API avain tiedostosta

const useHandleSearch = async (username, setProfile, setAchievements, setProfileNotFound) => {
  if (!username) {
    alert('Please enter a username');
    return;
  }

  try {
    // Haetaan profiilin ja saavutusten tiedot
    const [profileResponse, achievementsResponse] = await Promise.all([
      fetch(`https://retroachievements.org/API/API_GetUserProfile.php?u=${username}&y=${API_KEY}`),
      fetch(`https://retroachievements.org/API/API_GetUserRecentAchievements.php?u=${username}&m=60000&y=${API_KEY}`)
    ]);

    // Parsitaan jiisoni
    const profileData = await profileResponse.json();
    const achievementsData = await achievementsResponse.json();

    // Tarkistetaan, että onko data kunnossa ja toimitaan sen mukaan
    if (!profileData.User) {
      setProfile(null);
      setAchievements(null);
      setProfileNotFound(true);
      console.error('Profile not found:', profileData);
      return;
    }

    // Asetetaan data muuttujiin ja viedään se eteenpäin
    setProfile(profileData);
    setAchievements(achievementsData);
    setProfileNotFound(false);
  } catch (error) {
    alert('Failed to fetch user data');
    console.error('Error fetching user data:', error);
  }
};

export default useHandleSearch;