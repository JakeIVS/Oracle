import React from 'react';

function ErrorScreen() {
  return (
    <div className="flex h-full w-full justify-center bg-gradient-to-t from-slate-800 to-slate-600 pt-10">
      <div className="h-2/3 w-2/3 place-content-center bg-black bg-opacity-30 text-white">
        <h2 className="m-3 mb-5 font-serif text-3xl">Oops!</h2>
        <p className="m-3 max-w-prose">
          You must be logged in to view this page.
        </p>
        <p className="m-3 max-w-prose">
          Click{' '}
          <a className="font-semibold text-blue-600 hover:underline">here</a> to
          log in or{' '}
          <a className="font-semibold text-blue-600 hover:underline">here</a> to
          return to the Home page
        </p>
      </div>
    </div>
  );
}

export default ErrorScreen;
