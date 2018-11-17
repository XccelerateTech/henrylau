function reloadNotes(data) {
    $('#notes').html(data);
}

let config = { attributes: true, childList: true, subtree: true };
let cb = (mutationListe, observer) => {
    for (mutation in mutationListe) {
        if (mutation.type == 'subtree') {
            console.log('good to know that');
        } else {
            $('.delete').on('click', function (evt) {
                evt.preventDefault();
                let a = $(this).parent().parent()
                axios.delete('/api/memo/' + a.data('index'))
                    .then(function (res) {
                        reloadNotes(res.data);
                    }).catch(function (e) {
                        alert(e);
                    });
            });

            $('.memos').on('blur', 'input', function (evt) {
                evt.preventDefault();
                let a = $(this).parent()
                axios.put('/api/memo/' + a.data('index'), { memo: $(evt.currentTarget).val() })
                    .then(function (res) {
                        reloadNotes(res.data);
                    }).catch(function (e) {
                        alert(e)
                    });
            });
        }
    }
}
let observer = new MutationObserver(cb);
observer.observe($('#notes')[0], config);

$(function () {
    $('#post').on('click', function (e) {
        e.preventDefault();
        var val = $('input[name=memo]').val();
        if (val === '') {
            return;
        }
        $('input[name=memo]').val('');
        axios.post('/api/memo', { memo: val })
            .then(function (res) {
                reloadNotes(res.data);
            }).catch(err => {
                alert(err)
            });
    });

    $('#logout').on('click', () => {
        axios.get('/api/memo/logout')
        location.reload();
    })

    $('.delete').on('click', function (evt) {
        evt.preventDefault();
        let a = $(this).parent().parent()
        axios.delete('/api/memo/' + a.data('index'))
            .then(function (res) {
                reloadNotes(res.data);
            }).catch(function (e) {
                alert(e);
            });
    });

    $('.memos').on('blur', 'input', function (evt) {
        evt.preventDefault();
        let a = $(this).parent()
        axios.put('/api/memo/' + a.data('index'), { memo: $(evt.currentTarget).val() })
            .then(function (res) {
                reloadNotes(res.data);
            }).catch(function (e) {
                alert(e)
            });
    });
});