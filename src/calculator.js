export const Calculator = () => {
    return (
        <div class="wrap">
        <div class="calculator">
            
            <div class="display">
                <div class="inside_display">
                    <span>0</span>
                </div>
            </div>
    
            <div class="button_container">
                <div class="rows">
                    <button class="column">AC</button>
                    <button class="column">%</button>
                    <button class="column">√</button>
                    <button class="column">⬅️</button>
                </div>
                <div class="rows">
                    <button class="column">7</button>
                    <button class="column">8</button>
                    <button class="column">9</button>
                    <button class="column">/</button>
                </div>
                <div class="rows">
                    <button class="column">4</button>
                    <button class="column">5</button>
                    <button class="column">6</button>
                    <button class="column">*</button>
                </div>
                <div class="rows">
                    <button class="column">1</button>
                    <button class="column">2</button>
                    <button class="column">3</button>
                    <button class="column">-</button>
                </div>
                <div class="rows">
                    <button class="column">0</button>
                    <button class="column">.</button>
                    <button class="column">=</button>
                    <button class="column">+</button>
                </div>
            </div>
        </div>
    </div>
    );
}