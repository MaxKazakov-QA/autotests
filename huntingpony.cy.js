describe('Автоматизация HuntingPony', function () {
    
    it('Покупка 2шт товаров', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="/collection/lezhanki"] > .banner-list__item-title').click();
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.add-cart-counter__detail').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');

        
        
        })

    
})
