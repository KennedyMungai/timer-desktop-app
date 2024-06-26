const TopBar = () => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div className="w-screen h-5 bg-slate-600 rounded-t-xl" style={{ webkitAppRegion: 'drag' }} />
      <div className="w-screen h-8 bg-slate-600" />
      <div id="control-buttons" className="absolute right-0 top-2 pe-2">
        <button
          id="minimize"
          onClick={handleMinimize}
          className="p-1 text-2xl font-semibold text-neutral-200"
        >
          &#95;
        </button>
        <button
          id="close"
          onClick={handleClose}
          className="p-1 ml-2 text-2xl font-semibold text-neutral-200"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default TopBar
