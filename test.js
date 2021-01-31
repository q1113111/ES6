const repos = [
   {
      name: 'grit',
      owner: 'mojombo',
      description: 'Grit is no longer',
      id: 1,
   },
   {
      name: 'jsawesome',
      owner: 'sam',
      description: 'go to javascript',
      id: 2,
   },
   {
      name: 'htmlcss',
      owner: 'web',
      description: 'html add css is good',
      id: 3,
   },
];
const owers = [
   {
      name: 'mojombo',
      location: 'Taiwan',
      followers: 123,
   },
   {
      name: 'sam',
      location: 'USA',
      followers: 1523,
   },
   {
      name: 'web',
      location: 'Japanes',
      followers: 423,
   },
];

function getrepseId(id) {
   return new Promise((reslove, reject) => {
      const repo = repos.find((repo) => repo.id === id);
      repo ? reslove(repo) : reject(Error('no repo found'));
   });
}

function comboundOwner(repo) {
   return new Promise((reslove, reject) => {
      const owner = owers.find((owner) => owner.name === repo.owner);
      repo.owner = owner;
      repo.owner ? reslove(repo) : reject(Error('Can not find owner'));
   });
}

getrepseId(1)
   .then((repo) => {
      return comboundOwner(repo);
   })
   .then((repo) => {
      console.log(repo);
   })
   .catch((error) => {
      console.error(error);
   });
