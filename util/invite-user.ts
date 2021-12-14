import checkEnvironment from '@/util/check-environment';

const verifyToken = async ({ email, boardId }): Promise<boolean> => {
  const host = checkEnvironment();
  const URL = `${host}/api/invite-user`;
  const data = {
    email,
    boardId
  };

  const response = await fetch(URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  });

  const json = await response.json();

  if (json.message === 'Invited') {
    return true;
  } else {
    return false;
  }
};

export default verifyToken;
