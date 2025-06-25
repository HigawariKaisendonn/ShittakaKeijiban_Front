'use client';
import { Button } from "@/components/atoms/button/Button";

export const Button2 = () => {
    return(
        <div>
            <Button variant = "danger" onClick={() => alert("やぁ")} >
                初めてのボタン
            </Button>
        </div>
    );
}