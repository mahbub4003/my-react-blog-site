export default function useRoute({token, user}) {;
  if (token && user?.id) {
    return true;
  } else {
    return false;
  }
}
