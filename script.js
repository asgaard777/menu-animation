// jquery script for menu effect

      /* $("li.special > a").click(function (e) {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const $submenu = $target.next("ul");
        
        if($target.next("ul").hasClass('submenu-hide')){
            $submenu.slideDown(400).removeClass('submenu-hide').addClass('submenu-show');
        } else {
            $submenu.slideUp(400).removeClass('submenu-show').addClass('submenu-hide');
        }

        const $list = $target.parent().siblings("li.special").find("ul");
        $list.each(function() {
            if($(this).hasClass('submenu-show')){
                $(this).slideUp(400).removeClass('submenu-show').addClass('submenu-hide');
            }
        })  
    }) */

      // Vanilla javascript for menu effect

      const anchors = document.querySelectorAll("li.special > a");
      const li = document.querySelectorAll("li.special");

      function getSiblings(elem) {
        const siblings = [];
        let sibling = elem.parentNode.firstElementChild;

        while (sibling) {
          if (sibling !== elem) {             
            siblings.push(sibling);
          }
          sibling = sibling.nextElementSibling;
        }
        return siblings;
      }

      anchors.forEach((anchor) => {
        const parentLi = anchor.parentNode;
        const parentLiSiblings = getSiblings(parentLi);

        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const submenu = e.currentTarget.nextElementSibling;
          submenu.classList.toggle("submenu-show");

          for(let i = 0; i < parentLiSiblings.length; ++i){
            parentLiSiblings[i].children[1].classList.remove('submenu-show')
          }
        });
      });