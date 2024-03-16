export const errorMessage = (error: unknown): string => {
  let message = 'some error';
  if (error instanceof Error) {
    message = error.message;
  }
  return message;
};
