class ClassValueInstaller {
  buildLargWrap(elem) {
    elem.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;
  }

  buildSmallWrap(elem) {
    elem.style.cssText = `
      position: relative;
      height: 78vh;
      left: 0;
      width: 100%;
  `;
  }
}

export { ClassValueInstaller };
