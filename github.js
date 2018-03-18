class GitHub{
  constructor(){
    this.client_id = '3c940e4ccc49a07279c6';
    this.client_secret = '785163b2ba0b164b0bb19795553ac19a9851717a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}