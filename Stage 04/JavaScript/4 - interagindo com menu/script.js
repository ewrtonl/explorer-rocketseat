let option

let items = []

while (option != 3) {
  option = Number(
    prompt(`Olá usuário! Digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  )

  switch (option) {
    case 1:
      let itemName = prompt('Digite o item: ')
      items.push(itemName)
      break

    case 2:
      if (items.length == 0) {
        alert('Não há itens cadastrados')
      } else {
        alert(items)
      }
      break

    case 3:
      alert('Programa encerrado')
      break

    default:
      alert('Opção inválida')
  }
}

/*if (option == 1) {
    
    let itemName = prompt("Digite o item: ")
    
    items.push(itemName)
  
  }
  else if (option == 2) {

    if (items.length == 0) {
      alert("Não há itens cadastrados")
    }
    else {
      alert(items)
    }
  }
  else {
    alert("Programa encerrado")
  }
}*/
