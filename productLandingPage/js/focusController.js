import * as functions from './functions.js'
import * as flags from './flags.js'

// if (e.code === "Tab") {
//     if (e.shiftKey) {
//         focusable_children.slice(-1)[0].focus()
//     } else {
//         focusable_children[0].focus()
//     }
// }

export default () => {
    let prev_grand_parent;

    window.addEventListener('keydown', (e) => {
        
        // handle the event of click in space to works like click and scroll to the view
        if (e.code === "Space") {
            e.preventDefault()
            e.target.click()
        }
        // const grand_parent = e.target.closest('[grand_parent]')
        // if (grand_parent) {




        //     if (prev_grand_parent && prev_grand_parent != grand_parent) {
        //         functions.removeTheClassForAll(prev_grand_parent)
        //     }
        //     prev_grand_parent = grand_parent;
        //     functions.addTheClassForAll(grand_parent)
        // }

    })
}

// console.log(e)
// algoritmo 1
// cada evento tem o code e se o shift esta ativado
// deixar que o usuário navegue com o flow normal do tabindex
// sempre que navegar tentar pegar o grand_parent do objeto
// se existir dar focus pra ele
// considerar remover activated dos elementos anteriores (tanto up quanto down)

// algoritmo 2
// pegar todos os grand_parent
// verificar se o grand_parent atual possui o decendente (e.target)
// se sim manter ativado
// se não de acordo com o tab pegar o proximo grand parent (*pode não existir)
// tab          - proximo
// tab + shift  - anterior
// (*pode não existir)
// 

// guardar o parent anterior