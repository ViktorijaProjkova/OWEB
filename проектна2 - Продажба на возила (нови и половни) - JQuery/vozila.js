let posts = { //za sekoj post poseben id i soodvetno za sekoj post imam brojac za lajkovi i niza od komentari 
    1: { likes: 0, comments: [] },
    2: { likes: 0, comments: [] },
    3: { likes: 0, comments: [] },
    4: { likes: 0, comments: [] },
    5: { likes: 0, comments: [] },
    6: { likes: 0, comments: [] },
    7: { likes: 0, comments: [] },
    8: { likes: 0, comments: [] },
    9: { likes: 0, comments: [] },
    10: { likes: 0, comments: [] }
};

//fja za registriranje na lajkovite 
function toggleLike(postId) {
    posts[postId].likes++; //brojac za lajkovi 
    $(`#like-count-${postId}`).text(`${posts[postId].likes} Likes`); //prikazuvanje na noviot br na lajkovi na postot soodvetno
    //go zemam idto na postot, i soodvetno na toj post stavam podatok za noviot br na lajkovi 
}

//fja za dodavanje na komentari
function addComment(postId) {
    const commentInput = $(`#comment-input-${postId}`); //klasata mi e comment input a idto na textarea za sekoj post posebno mi e 
    //comment input #(br post id), vo ovaa promenliva go cuvam stringot sto e vmetnat vo textarea na toj post (komentarot)
    const commentList = $(`#comment-list-${postId}`);//listata na komentari za sekoj post 
    const newComment = commentInput.val().trim();//vo new comment go cuvam inputot od textarea so trgnati prazni mesta 

    if (newComment !== "") {
        //go dodavam komentarot vo objektot
        posts[postId].comments.push(newComment);

        //kreiram nov list item (ako ima povekje komentari mi se cuvaat vo lista i za sekoj nov dodaden mi treba novo li)
        const li = $(`<li>${newComment} <button class="delete-comment" onclick="deleteComment(${postId}, this)">Delete</button></li>`);
        commentList.append(li);//go dodavam vo listata na komentari 

        //ja cistam textarea za novi komentari 
        commentInput.val("");
    }
}

//fja za brisenje na komentarite 
function deleteComment(postId, button) {
    const commentElement = $(button).parent();//go zemam list itemot na koj se odnesuva kopceto (li e parent na button)
    const commentIndex = commentElement.index();//isto taka go zemam i indeksot na komentarot koj sto kje go brisa

    
    posts[postId].comments.splice(commentIndex, 1);//splice mi e podobra varijanta od delete bidejki mi gi pomestuva dr elementi od 
    //nizata bez da ostava prazni mesta megju elementite  (1-> da izbrisam eden el ne cela niza)

    
    commentElement.remove();//go brisam elementot
}
