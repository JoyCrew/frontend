declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: {
          roadAddress: string;
          bname: string;
          buildingName: string;
          apartment: string;
          zonecode: string;
        }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

export {};
