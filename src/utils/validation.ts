const validate = (obj: any) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (!value) {
        return false;
      }
    }
  }

  return true;
};
