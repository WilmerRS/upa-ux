export default class RedirectTransactionWebToNewTab {
  redirect () {
    const liTransactionButton: any = document.querySelector(
      '#iconos_sup > ul > li.ico_transacciones'
    )
    console.log('\n🚀 Redirect transaction web to new tab \n')

    const oldAnchor = liTransactionButton.firstChild
    if (oldAnchor) {
      oldAnchor.style.display = 'none'
    }

    const newAnchor = document.createElement('a')
    newAnchor.href =
      'https://hermesoft.unipamplona.edu.co/unipamplona/hermesoft/vortal/iniciarSesion.jsp'
    newAnchor.target = 'blank'

    liTransactionButton.appendChild(newAnchor)

    liTransactionButton.style.position = 'relative'
    newAnchor.appendChild(this._createBadge())
  }

  _createBadge () {
    const newSpanBadge = document.createElement('span')
    newSpanBadge.style.position = 'absolute'
    newSpanBadge.style.top = '0px'
    newSpanBadge.style.left = '0px'
    newSpanBadge.style.fontSize = '8px'
    newSpanBadge.style.marginTop = '0px'
    newSpanBadge.style.marginRight = '-6px'
    newSpanBadge.style.fontWeight = 'bolder'
    newSpanBadge.style.padding = '2px 2px'
    newSpanBadge.style.borderRadius = '2px'
    newSpanBadge.style.background = 'rgb(15 133 68)'
    newSpanBadge.style.color = '#fff'
    newSpanBadge.innerText = 'NEW'

    return newSpanBadge
  }
}
