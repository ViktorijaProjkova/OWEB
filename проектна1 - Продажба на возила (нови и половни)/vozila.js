let posts = { //za evaluacija na lajkovite na postovite i komentarite koi kje se cuvaat pod postot
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
function toggleLike(postId) {
    // So klikanje na kopceto lajk izbroj gi lajkovite (klikovite)
    posts[postId].likes++;

    //Azuriranje na brojot na lajkovi na stranicata (se povikuva na idto zapisano vo html)
    document.getElementById(`like-count-${postId}`).textContent = `${posts[postId].likes} Likes`;
}

//Funkcija za cuvanje na komentarite na postovite
function addComment(postId) {
    const commentInput = document.getElementById(`comment-input-${postId}`);
    const commentList = document.getElementById(`comment-list-${postId}`);
    const newComment = commentInput.value.trim();

    if (newComment !== "") {
        //Dodavanje na nov komentar vo objektot za komentari
        posts[postId].comments.push(newComment);

        //Kreiranje nov list item element za komentar
        const li = document.createElement('li');
        li.innerHTML = `${newComment} <button class="delete-comment" onclick="deleteComment(${postId}, this)">Delete</button>`;
        commentList.appendChild(li);

        //Delot za add coment (za vnes na komenatar) da se postavi za nov vlez na nekoj tekst -t.e da ne ostane 
        //stariot komentar i vo textarea
        commentInput.value = "";
    }
}
//brisenje na komm
function deleteComment(postId, button) {
    //Go barame indeksot na komentarot koj treba da se izbrise (komentarite mi se cuvaat vo nizi)
    const commentIndex = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    
    posts[postId].comments.splice(commentIndex, 1);

    // Brisenje na li element od DOM
    button.parentElement.remove();
}
