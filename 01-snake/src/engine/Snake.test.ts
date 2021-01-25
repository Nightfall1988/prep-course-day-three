import { Snake } from './Snake'
import { Cell } from './Cell'
import { Grid } from './Grid'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })

    it("should be able to move right", () => {
        const snake = new Snake()

        snake.move();
        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("should be able to move down", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move();
        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("should be able to move Up", () => {
        const snake = new Snake()

        snake.setDirection('Up')
        snake.move();
        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

   it("should be able to move left", () => {
        const snake = new Snake()

        snake.setDirection('Left')
        snake.move();
        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    }) 

       it("should be able to grow", () => {
        const snake = new Snake()

        snake.grow();
        snake.move();
        snake.move();
        snake.move();
        snake.move();
        expect(snake.getHead()).toEqual(new Cell(6, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0), new Cell(3, 0), new Cell(4, 0), new Cell(5, 0)])
    })

    it("shouldn't be able to go reverse", () => {

        const snake = new Snake()
        
        snake.move();
        snake.move();
        snake.move();
        expect(snake.privDir == 'Down' && snake.direction == 'Up').toBeFalsy()
        expect(snake.privDir == 'Right' && snake.direction == 'Left').toBeFalsy()
        expect(snake.privDir == 'Up' && snake.direction == 'Down').toBeFalsy()
        expect(snake.privDir == 'Left' && snake.direction == 'Right').toBeFalsy()
    })
    // WRITE TEST FOR SNAKE --- LOOKS FINE, DOESNT WORK
    it('should kill snake if it touches its tail', () => {
        const snake = new Snake()
        console.log(new Cell(snake.tail[1].x, snake.tail[1].y))
        console.log(snake.tail)
        expect(snake.isSnake(new Cell(snake.tail[1].x, snake.tail[1].y))).toBeTruthy()
    })
})