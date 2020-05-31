import React, { useState, useEffect } from 'react';
import IntroducePage, { profileImageLoad } from './IntroducePage';

const App: React.FC = () => {
  const [message, setMessage] = useState('Loading... Please wait.');
  const [mainContent, setmainContent] = useState(<></>);

  useEffect(() => {
    profileImageLoad.then(async () => {
      let loadCount = 0;
      const moduleLoads = [
        import('./BlinkView'),
        import('./ReversChangePage'),
        import('./AIOmokPage'),
        import('./CRIPage'),
        import('./SkillPage'),
        import('./ContactPage'),
      ] as const;

      setMessage(`Loading components... 0/${moduleLoads.length}`);

      moduleLoads.forEach((load) => {
        Promise.all([load]).then(() => {
          loadCount++;
          setMessage(
            `Loading components... ${loadCount}/${moduleLoads.length}`,
          );
        });
      });

      const [
        { default: BlinkView },
        { default: ReversChangePage },
        { default: AIOmokPage },
        { default: CRIPage, frames },
        { default: SkillPage },
        { default: ContactPage },
      ] = await Promise.all(moduleLoads);

      loadCount = 0;
      setMessage(`Loading images... ${loadCount}/${frames.length}`);
      await Promise.all(
        frames.map((frame) => {
          return frame.promise.then(() => {
            loadCount++;
            setMessage(`Loading images... ${loadCount}/${frames.length}`);
          });
        }),
      );

      setmainContent(
        <>
          <BlinkView title="I am a Game Developer." />
          <ReversChangePage />
          <AIOmokPage />
          <BlinkView title="I am a Web Developer." />
          <CRIPage />
          <SkillPage />
          <hr />
          <ContactPage />
        </>,
      );

      setMessage(`The loading is done! Scroll down for more information.`);
    });
  }, []);

  return (
    <>
      <IntroducePage message={message} />
      {mainContent}
    </>
  );
};

export default App;
