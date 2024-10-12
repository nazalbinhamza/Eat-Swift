declare module 'aos' {
    const AOS: {
      init: (options?: { duration?: number; once?: boolean }) => void;
      refresh: () => void;
    };
    export default AOS;
  }