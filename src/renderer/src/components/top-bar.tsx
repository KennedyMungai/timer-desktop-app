const TopBar = () => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div className="w-screen h-5 bg-blue-400" style={{ webkitAppRegion: 'drag' }}></div>
      <div id="control-buttons" className="absolute top-0 right-0">
        <button id="minimize" onClick={handleMinimize}>
          &#95;
        </button>
        <button id="close" onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default TopBar
