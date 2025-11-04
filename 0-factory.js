// factory functions return objects
const makeFriendsManager = (username) => {
  const friends = [];

  const friendsManager = {
    username, // we can leave username "public" if we don't care about how it is used or reassigned.
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') {
        console.log('new friends must be strings');
        return;
      }
      friends.push(newFriend);
    },
    printFriends() {
      this.friends.forEach((friend) => {
        console.log(`${this.username} is friends with ${friend}`);
      });
    },
    // add a getter method to get a copy of the friends array
  }
  return friendsManager;
}

// instances of the factory function have their own friends
const reuben = makeFriendsManager('reuben');
reuben.addFriend('carmen')
reuben.addFriend('ann')
reuben.addFriend('motun')
reuben.printFriends();
// reuben is friends with carmen
// reuben is friends with ann
// reuben is friends with motun

const maya = makeFriendsManager('maya');
maya.addFriend('ben')
maya.addFriend('gonzalo')
reuben.printFriends();
// maya is friends with ben
// maya is friends with gonzalo


// console.log(reuben);
// {
//   getFriends: [Function: getFriends],
//   addFriend: [Function: addFriend]
// }

// console.log(maya);
// {
//   getFriends: [Function: getFriends],
//   addFriend: [Function: addFriend]
// }

// so, are they the same object?
// console.log(reuben === maya);

// are the methods of these objects the same?
// console.log(reuben.addFriend === maya.addFriend);
