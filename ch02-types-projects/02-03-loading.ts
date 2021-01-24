{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(stateObj: ResourceLoadState): void {
    let msg = '';
    switch (stateObj.state) {
      case 'loading':
        msg = stateObj.state;
        break;
      case 'success':
        msg = stateObj.response.body;
        break;
      case 'fail':
        msg = stateObj.reason;
        break;
      default:
        throw new Error(`Unknown state: ${stateObj}`);
        break;
    }

    console.log(msg);
  }

  printLoginState({ state: 'loading' }); // loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // no network
}
