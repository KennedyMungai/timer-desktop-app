const TopBar = () => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div className="w-screen h-5 bg-blue-400" style={{ webkitAppRegion: 'drag' }} />
      <div className="w-screen h-5 bg-blue-400" />
      <div id="control-buttons" className="absolute right-0 top-2 pe-2">
        <button id="minimize" onClick={handleMinimize} className="text-2xl font-semibold">
          &#95;
        </button>
        <button id="close" onClick={handleClose} className="text-2xl font-semibold">
          &times;
        </button>
      </div>
    </div>
  )
}

export default TopBar
